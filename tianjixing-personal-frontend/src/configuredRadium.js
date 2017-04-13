import Radium from 'radium'
import lintStyles from 'radium-plugin-linter'
import {Plugins} from 'inline-style-linter'

export default component => {
  return Radium({
    plugins: [
      Radium.Plugins.mergeStyleArray,
      Radium.Plugins.checkProps,
      Radium.Plugins.resolveMediaQueries,
      Radium.Plugins.resolveInteractionStyles,
      lintStyles,
      Radium.Plugins.prefix,
      Radium.Plugins.checkProps,
    ],
    linter: {
      plugins: [
        Plugins.noInitialValue,
        Plugins.noVendorPrefix,
        Plugins.preferNumber,
        Plugins.shorthandLonghand,
        // Plugins.compatibility,
      ],
      compatibility: {
        default: true,
        //disable support issues validation
        issues: true,
        // only considered full support
        partial: false,
      },
    },
  })(component);
}
