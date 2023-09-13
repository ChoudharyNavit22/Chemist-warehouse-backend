export interface FrozenResponseMessage {
    readonly statusCode: number,
    readonly customMessage: string;
    readonly type: string; 
}

export interface ErrorMessages {
    readonly DEFAULT: FrozenResponseMessage;
    readonly APP_ERROR: FrozenResponseMessage;
    readonly DB_ERROR: FrozenResponseMessage;
    readonly INVALID_ID: FrozenResponseMessage;
    readonly DUPLICATE: FrozenResponseMessage;
}

export interface SuccessMessages {
    readonly DEFAULT: FrozenResponseMessage;
    readonly CREATED: FrozenResponseMessage;
}

export interface StatusMessages {
    readonly ERROR: ErrorMessages;
    readonly SUCCESS: SuccessMessages;
}

export interface TimeUnits {
    readonly SECONDS: string;
    readonly MINUTES: string;
    readonly HOURS: string;
    readonly DAYS: string;
    readonly WEEKS: string;
    readonly MONTHS: string;
}

export interface SwaaggerResponseMessage {
    readonly code: number;
    readonly message: string;
}

export interface OrderStatus {
    readonly PENDING: string;
    readonly COMPLETED: string;
}

export interface DatabaseConstants {
    readonly ORDER_STATUS: OrderStatus;
}