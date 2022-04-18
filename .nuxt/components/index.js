export { default as Login } from '../..\\components\\Login.vue'
export { default as MemberTable } from '../..\\components\\MemberTable.vue'
export { default as Popup } from '../..\\components\\Popup.vue'
export { default as Register } from '../..\\components\\Register.vue'
export { default as UpdateMember } from '../..\\components\\UpdateMember.vue'
export { default as SvgBank } from '../..\\components\\Svg\\Bank.vue'
export { default as SvgEmail } from '../..\\components\\Svg\\Email.vue'
export { default as SvgEye } from '../..\\components\\Svg\\Eye.vue'
export { default as SvgLock } from '../..\\components\\Svg\\Lock.vue'
export { default as SvgLoginSvg } from '../..\\components\\Svg\\LoginSvg.vue'
export { default as SvgPhone } from '../..\\components\\Svg\\Phone.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
