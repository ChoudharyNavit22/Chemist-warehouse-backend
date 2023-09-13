import {describe, expect, test} from '@jest/globals';
import {sendError, sendSuccess} from '../utils'

describe('Send Error Function', () => {
  test('pass a string to check if send error functions passes the string as error', () => {
    let output = sendError("Shop Not Found")?.output.payload;
    expect(output?.statusCode).toBe(400);
    expect(output?.message).toBe("Shop Not Found");
    expect(output?.error).toBe("Bad Request");
  });
});

describe('Send Success Function', () => {
    test('pass a string and data to check if send success functions passes the string as success message and data', () => {
        let dataToSend = {name:"Shop1"}
      let output = sendSuccess("Created Successfully",dataToSend);
        expect(output?.statusCode).toBe(200);
        expect(output?.message).toBe("Created Successfully");
        expect(output?.data).toEqual(dataToSend);
    });
  });