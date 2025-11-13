// import React from 'react'
// import { UserConsumer } from './UserContext'

// const ComponentF = () => {
//   return (
//     <UserConsumer>
//         {
//             (name)=>{
//                 return <h1>Hello, {name}</h1>
//             }
//         }
//     </UserConsumer>
//   )
// }

// export default ComponentF

// import React, { Component } from 'react'
// import { UserConsumer } from './UserContext'
// import ChannelContext from './ChannelContext'

// class ComponentF extends Component {
//   render() {
//     return (
//       <UserConsumer>
//         {name => {
//           return (

//             <ChannelContext.Consumer >
//               {channel => {
//                 return (<div>
//                   hello, {name} channel: {channel}
//                 </div>)
//               }
//               }
//             </ChannelContext.Consumer>
//           )

//         }
//         }
//       </UserConsumer>
//     )
//   }
// }

// export default ComponentF

// import React, { Component } from 'react'
// import { UserConsumer } from './UserContext'
// import ChannelContext from './ChannelContext'

// function ComponentF() {

//   return (
//     <UserConsumer>
//       {name => {
//         return (

//           <ChannelContext.Consumer >
//             {channel => {
//               return (<div>
//                 hello, {name} channel: {channel}
//               </div>)
//             }
//             }
//           </ChannelContext.Consumer>
//         )

//       }
//       }
//     </UserConsumer>
//   )

// }

// export default ComponentF

import  { useContext } from 'react'
import UserContext from './UserContext'
import ChannelContext from './ChannelContext'

function ComponentF() {
  const name = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
      {name} - {channel}
    </div>
  )

}

export default ComponentF