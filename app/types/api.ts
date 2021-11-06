export type BaseError = {
	reason: string
};

export type Response<T, E extends BaseError = BaseError> =
	{ ok: true, result: T } |
	{ ok: false, error: E }
