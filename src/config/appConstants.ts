import {
  SwaaggerResponseMessage,
  StatusMessages,
  FrozenResponseMessage,
  TimeUnits
} from "../interfaces";

const swaggerDefaultResponseMessages: Array<SwaaggerResponseMessage>  = [
    { code: 200, message: "OK" },
    { code: 400, message: "Bad Request" },
    { code: 401, message: "Unauthorized" },
    { code: 404, message: "Data Not Found" },
    { code: 500, message: "Internal Server Error" }
  ];

  const STATUS_MSG: StatusMessages = {
    ERROR: {
      DEFAULT: {
        statusCode: 400,
        customMessage: "Error",
        type: "DEFAULT"
      },
      APP_ERROR: {
        statusCode: 400,
        customMessage: 'Application error',
        type: 'APP_ERROR'
      },
      DB_ERROR: {
        statusCode: 400,
        customMessage: 'DB Error : ',
        type: 'DB_ERROR'
      },
      INVALID_ID: {
        statusCode: 400,
        customMessage: 'Invalid id provided : ',
        type: 'INVALID_ID'
     },
      DUPLICATE: {
        statusCode: 400,
        customMessage: 'Duplicate entry',
        type: 'DUPLICATE'
     },
    },
    SUCCESS: {
      DEFAULT: {
        statusCode: 200,
        customMessage: "Success",
        type: "DEFAULT"
      },
      CREATED: {
        statusCode: 201,
        customMessage: "Created Successfully",
        type: "CREATED"
      }
    }
  };

  const CUSTOM_ERROR_404 = (msg: string): FrozenResponseMessage => {
    return {
      statusCode: 404,
      customMessage: msg + " NOT FOUND",
      type: "PAGE_NOT_FOUND"
    };
  };
  
  const CUSTOM_ERROR = function (msg: string, statusCode?: number): FrozenResponseMessage {
    return {
      statusCode: statusCode || 400,
      customMessage: msg,
      type: "CUSTOM"
    };
  };

  const TIME_UNITS: TimeUnits = {
    MONTHS: "months",
    HOURS: "hours",
    MINUTES: "minutes",
    SECONDS: "seconds",
    WEEKS: "weeks",
    DAYS: "days"
  };
  
  
  export default {
    swaggerDefaultResponseMessages,
    STATUS_MSG,
    CUSTOM_ERROR_404,
    CUSTOM_ERROR,
    TIME_UNITS
  } as const;