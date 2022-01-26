import { extend } from "vee-validate";

import { required } from "vee-validate/dist/rules";

export default extend("required", {
  ...required,
  message: "Please enter a valid cryptocurrency name.",
});
