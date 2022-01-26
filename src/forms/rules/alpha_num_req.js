import { extend } from "vee-validate";

import { alpha_num } from "vee-validate/dist/rules";

const alpha_num_req = extend("alpha_num", {
  ...alpha_num,
  message: "Please enter a valid cryptocurrency name.",
});

export default alpha_num_req;
