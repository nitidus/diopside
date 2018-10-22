var today = new Date(),
    GLOBAL_PASSWORD = 'QeOtLqfzR8Su',
    GEM_USER_INIT = {
  	email: "info@gemfollow.net",
  	password: GLOBAL_PASSWORD,
  	created_at: today.toISOString(),
  	modified_at: today.toISOString(),
  	confirmation: {
  		code: "000-000",
  		confirmed: true
  	},
  	profile: "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 68.6 46.19\" style=\"enable-background:new 0 0 68.6 46.19; background-color: #040404;\"><defs><style>.cls-1{fill:#fff;}</style></defs><title>1</title><path class=\"cls-1\" d=\"M56.71,0H11.89L0,11.89l34.3,34.3,34.3-34.3Zm-51,11.89L13.55,4H30L15.31,18.71l19,19,19-19L42.39,7.79l-9.5,9.5,2.83,2.83,6.67-6.67,5.25,5.26L34.3,32.05,21,18.71,35.67,4H55.06L63,11.89,34.3,40.54Z\"/></svg>",
    isGem: true,
  	name: "GEM FOLLOW"
    },
    GEM_TOKEN_INIT = {
      username: "gemflw",
      password: GLOBAL_PASSWORD,
      isVerified: true
    };

module.exports = {
  users: GEM_USER_INIT,
  tokens: GEM_TOKEN_INIT
};
