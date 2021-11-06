import { Response } from '@/types/api';

export type RecipientCommonQuestions = {
	question: string,
	answer: string
};

export type RecipientData = {
	name: string,
	commonQuestions: RecipientCommonQuestions[],
	dischargeAt: number
};

export type RecipientResponse = Response<RecipientData>;
