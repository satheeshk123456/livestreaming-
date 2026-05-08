export function generateUniqueUserID() {
    return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  export function isValidLiveID(liveID) {
    return typeof liveID === 'string' && liveID.length > 0;
  }
  
  export function isValidUserID(userID) {
    return typeof userID === 'string' && userID.length > 0;
  }
  
  export function getErrorMessage(error) {
    if (error && error.message) {
      return error.message;
    }
    return 'An unknown error occurred.';
  }