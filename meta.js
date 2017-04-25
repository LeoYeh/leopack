module.exports = {
    "helpers": {
        "if_or": function(v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "專案名稱"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "專案敘述",
            "default": "一個 Vue.js 專案"
        },
        "author": {
            "type": "string",
            "message": "leo@iprefer.com.tw"
        },
        "build": {
            "type": "list",
            "message": "Vue build",
            "choices": [{
                "name": "Runtime + Compiler: 建議大部分使用者",
                "value": "standalone",
                "short": "standalone"
            }, {
                "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
                "value": "runtime",
                "short": "runtime"
            }]
        },
        "router": {
            "type": "confirm",
            "message": "安裝 vue-router?"
        },
        "vuex": {
            "type": "confirm",
            "message": "安裝 Vuex?"
        },
        "lint": {
            "type": "confirm",
            "message": "Use ESLint to lint your code?"
        },
        "lintConfig": {
            "when": "lint",
            "type": "list",
            "message": "Pick an ESLint preset",
            "choices": [{
                "name": "Standard (https://github.com/feross/standard)",
                "value": "standard",
                "short": "Standard"
            }, {
                "name": "Airbnb (https://github.com/airbnb/javascript)",
                "value": "airbnb",
                "short": "Airbnb"
            }, {
                "name": "none (configure it yourself)",
                "value": "none",
                "short": "none"
            }]
        },
        "vuex": {
            "type": "confirm",
            "message": "安裝 Vuex ?"
        }
    },
    "filters": {
        ".eslintrc.js": "lint",
        ".eslintignore": "lint",
        "config/test.env.js": "unit || e2e",
        "test/unit/**/*": "unit",
        "build/webpack.test.conf.js": "unit",
        "test/e2e/**/*": "e2e",
        "src/router/**/*": "router"
    },
    "completeMessage": "開始碼農 \n\n  {{^inPlace}}cd {{destDirName}} \&\& npm install \&\& npm run dev \n\n 一行搞定 開始 coding."
};
