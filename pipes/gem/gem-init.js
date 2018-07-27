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
  	profile: "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 504 504' style='enable-background:new 0 0 504 504; background-color: #040404;' xml:space='preserve'><style type='text/css'> .st0{font-family:'WorkSans-Medium';} .st1{font-size:384.8238px; fill: #ffffff;}%0A</style><text transform='matrix(1 0 0 1 112.6943 374.6675)' class='st0 st1'>G</text></svg>",
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
