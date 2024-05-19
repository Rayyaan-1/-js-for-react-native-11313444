function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
      throw new Error('Array lengths must match.');
    }
  
  
    const users = names.map((name, index) => {
      return {
        id: index + 1, 
        originalName: name,
        modifiedName: modifiedNames[index],
      };
    });
  
    return users;
  }