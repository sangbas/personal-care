var UserProfile = (function() {
    var full_name = "";
    var user_id = "";
  
    var getName = function() {
      return full_name;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(name) {
      full_name = name;     
      // Also set this in cookie/localStorage
    };

    var getUserId = function() {
        return full_name;    // Or pull this from cookie/localStorage
    };

    var setUserId = function(id) {
      user_id = id;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getUserId: getUserId,
      setUserId: setUserId,
      getName: getName,
      setName: setName
    }
  
  })();
  
  export default UserProfile;
  