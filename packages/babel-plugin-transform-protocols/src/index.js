import { declare } from "@babel/helper-plugin-utils";

import { template, types as t } from "@babel/core";

// const buildRequire = template(`
//   protocol PROTOCOL_NAME {
//   }
// `);


export default declare((api, options) => {
  api.assertVersion(7);
  return {
    visitor: {
      BinaryExpression(path) {
        const { node } = path;
        if (node.operator === "protocol") {
          console.log('yay!!', path.node.right);
        }
      }
    }
  }
});
