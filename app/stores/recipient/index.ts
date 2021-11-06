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
		}
	}
});
