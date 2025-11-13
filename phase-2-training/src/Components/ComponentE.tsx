// import React from 'react'
// import ComponentF from '../Components/ComponentF'
// const ComponentE = () => {
//   return (
//     <div>
//         <ComponentF />
//     </div>
//   )
// }

// export default ComponentE

import React, { Component } from 'react'
import UserContext from './UserContext'
import ComponentF from './ComponentF';
 class ComponentE extends Component {
  static contextType = UserContext
  declare context: React.ContextType<typeof UserContext> //explicitly tell to take type from usercontext
  render() {
    return (
      <div>
        Component E context {this.context} {/*ts check for type */}
        <ComponentF />
      </div>
    )
  }
}
// ComponentE.contextType = UserContext;

export default ComponentE