// Optional Chaining and Nullish Coalescing

const defaultConfig = {
    theme: "light",
    notifications: true,
    language: 'en-US',
    dashboard: {
        layout: 'grid',
        widgets: 5
    }
};

function loadConfig(userConfig){
    return {
        theme: userConfig?.theme ?? defaultConfig.theme,
        notifications: userConfig?.notifications ?? defaultConfig.notifications,
        language: userConfig?.language ?? defaultConfig.language,
        layout: userConfig?.dashboard?.layout ?? defaultConfig.dashboard.layout,
        widgets: userConfig?.dashboard?.widgets ?? defaultConfig.dashboard.widgets
    };
};

const config1 = {
    theme: 'dark',
    dashboard: {
        layout:'list'
    }
}

const config2 = null;

// console.log("User 1 config:", loadConfig(config1));
// console.log("User 2 config:", loadConfig(config2));

// ---------------------------------------------------------------
// Challenge

const config = {
    dashboard: {
        widgets: 5,
        layout: "grid"
    },
    profile: {
        settings : {
            theme: 'dark'
        }
    }
}

function getSafe(obj, path, fallback){
    return path
        .split(".")
        .reduce((acc, key) => acc?.[key], obj) ?? fallback;
}

// --------------------------------------------------------------
// Challenge 2: validateConfig() Method

const reqKeys = ['dashboard.layout', 'language', 'notifications', 'apple'];

function validateConfig(config, requiredKeys){
    const res = [];

    for (let path of requiredKeys){
        const value = getSafe(defaultConfig, path, undefined);
        if (value === undefined){
            res.push(path);
        }
    }
    return res
}

// console.log(validateConfig(defaultConfig, reqKeys));


// ----------------------------------------------------------------

const settings = {
  system: {
    logging: {
      level: "verbose"
    }
  }
};

function getLogLevel(s){
    return {
        level: s?.system?.logging?.level ?? 'info'
    };
}

console.log(getLogLevel(settings));