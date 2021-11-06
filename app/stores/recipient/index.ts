import { api } from '@/utils/api';
import { defineStore } from 'pinia';
import { RecipientData, RecipientResponse } from './types';

type RecipientStore = {
	loadingState: 'loading' | 'error' | 'finished',
	data: RecipientData | null
};

export const useRecipientStore = defineStore('recipient', {
	state: (): RecipientStore => ({
		loadingState: 'loading',
		data: null
	}),

	getters: {
		isFinished: state => state.loadingState === 'finished'
	},

	actions: {
		async fetch() {
			this.loadingState = 'loading';

			try {
				const { data } = await api.get<RecipientResponse>('/recipient');
				if (data.ok) {
					this.loadingState = 'finished';
					this.data = data.result;

					return;
				}
			} catch { }

			this.loadingState = 'error';
		},

		mock() {
			this.loadingState = 'finished';
			this.data = {
				name: '김요한',
				commonQuestions: [
					{
						question: '김요한 훈련병은 군대에 간 건가요?',
						answer: '네, 4주 훈련 중에 있습니다.\n' +
							'그런데 현재 리디라는 곳에서 산업기능요원으로 복무하고 있어서 4주만 있다가 다시 나와서 회사 계속 다닐 거에요.'
					}
				],
				dischargeAt: Date.now() + 3600
			};
		}
	}
});
