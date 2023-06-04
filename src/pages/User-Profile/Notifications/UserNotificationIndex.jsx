import UserNotifications from './UserNotifications'
import LivePreview from '../../../components/LivePreview/LivePreview'
import { Helmet } from 'react-helmet-async'
const UserNotificationIndex = () => {
  return (
    <div className="w-[1442px]  h-[738px] rounded-[20px] mx-auto my-auto bg-[#FFFFFF]  p-20 ">
   <Helmet>
        <title>Ya-Sin - Notification</title>
      </Helmet>
    <div className="flex items-center  justify-center mt-8 animate__animated  animate__fadeIn">
      <div className=" flex justify-between   gap-10  rounded-[12px]">
          <UserNotifications/>
    

        <div  className="w-[343px] h-auto py-2 grid items-center rounded-[12px] overflow-hidden content-bg relative">
        <LivePreview>
         
         
        </LivePreview>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserNotificationIndex