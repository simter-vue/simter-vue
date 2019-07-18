
import Vue from 'vue'
import { version } from '../package.json'

import stColgroup from 'simter-vue-colgroup'
import stThead from 'simter-vue-thead'

// global register all components
const components = {
  "st-colgroup": ["0.3.0", stColgroup],
  "st-thead": ["0.4.2", stThead]
}
const keyVersions = {}
Object.entries(components).forEach(([key, value]) => {
  Vue.component(key, value[1])
  keyVersions[key] = value[0]
});
console.log(`global register all components: %o`, keyVersions)

export default { version, components: keyVersions }