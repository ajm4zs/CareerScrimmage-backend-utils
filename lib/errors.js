class BaseError extends Error {

	constructor (message, status, raw) {
		super(message);
		this.name = this.constructor.name;
		this.status = status;
		this.raw = raw;

		if (typeof Error.captureStackTrace === 'function') Error.captureStackTrace(this, this.constructor);
		else this.stack = (new Error(message)).stack;
	}

}

class BadRequestError extends BaseError {

	constructor (message) {
		super(message || 'Bad Request', 400);
	}

}

class ForbiddenError extends BaseError {

	constructor (message) {
		super(message || 'Forbidden', 403);
	}

}

class NotFoundError extends BaseError {

	constructor (message) {
		super(message || 'Not Found', 404);
	}

}

class ConflictError extends BaseError {

	constructor (message) {
		super(message || 'Conflict', 409);
	}

}

class InternalServerError extends BaseError {

	constructor (message) {
		super(message || 'Internal Server Error', 500);
	}

}

module.exports = {
	BaseError: BaseError,
	BadRequestError: BadRequestError,
	ForbiddenError: ForbiddenError,
	NotFoundError: NotFoundError,
	ConflictError: ConflictError,
	InternalServerError: InternalServerError
};