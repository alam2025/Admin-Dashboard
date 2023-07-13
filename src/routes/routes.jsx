import { createBrowserRouter  } from "react-router-dom";

// Components
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AdminProfile from "../pages/Admin-Profile/Profile/AdminProfile";
import ChangePassword from "../pages/Admin-Profile/Profile/ChangePassword/ChangePassword";
import ProfileDetails from "../pages/Admin-Profile/Profile/ProfileDetails/ProfileDetails";
import CreateMasjid from "../pages/Admin-Profile/Masjid/CreateMasjid";
import Masjid from "../pages/Admin-Profile/Masjid/Masjid";
import PrayerTime from "../pages/Admin-Profile/Masjid/PrayerTime";
import CreateFavorites from "../pages/Admin-Profile/Favorites/CreateFavorites";
import MyFavoriteList from "../pages/Admin-Profile/Favorites/MyFavoriteList";
import Favorite from "../pages/Admin-Profile/Favorites/Favorite";
import Index from "../pages/Admin-Profile/Settings/Index";
import Settings from "../pages/Admin-Profile/Settings/Settings";
import UserFavorites from "../pages/User-Profile/Favorites/UserFavorites";
import UserCreateFavorites from "../pages/User-Profile/Favorites/UserCreateFavorites";
import UserMyFavoriteList from "../pages/User-Profile/Favorites/UserMyFavoriteList";
import UserProfile from "../pages/User-Profile/UserProfile/UserProfile";
import UserProfileDetails from "../pages/User-Profile/UserProfile/UserProfileDetails/UserProfileDetails";
import UserChangePassword from "../pages/User-Profile/UserProfile/UserChangePassword/UserChangePassword";
import MyMasjid from "../pages/User-Profile/MyMasjid/MyMasjid";
import MyMasjidDetails from "../pages/User-Profile/MyMasjid/MyMasjidDetails/MyMasjidDetails";
import MyMasjidList from "../pages/User-Profile/MyMasjid/MyMasjidList/MyMasjidList";
import UserIndex from "../pages/User-Profile/Settings/UserIndex";
import UserSettings from "../pages/User-Profile/Settings/UserSettings";
import UserNotificationIndex from "../pages/User-Profile/Notifications/UserNotificationIndex";
import SignUp from "../pages/SignUp/SignUp";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import ResetPassword from "../pages/ForgetPassword/ResetPassword";
import PrivateRoute from "../AuthRoute/PrivateRoute";
import { useEffect } from "react";

const RedirectHome = () => {
  useEffect(() => {
    window.location.href = "/powerhouse";
  }, []);

  return null;
};

const routes = createBrowserRouter([
  {
    path: "/powerhouse",
    element: <PrivateRoute><Root /></PrivateRoute>,
    children: [
      {
        path: "/powerhouse",
        element:<PrivateRoute> <Home /></PrivateRoute>,
      },
      
      {
        path: "/powerhouse/admin-profile",
        element:<AdminProfile />,
        children: [
          {
            path: "",
            element: <ProfileDetails />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
        ],
      },
      {
        path: "create-masjid",
        element: <Masjid />,
        children: [
          {
            path: "",
            element: <CreateMasjid />,
          },
          {
            path: "prayer-time",
            element: <PrayerTime />,
          },
        ],
      },
      {
        path: "create-favorites",
        element: <Favorite />,
        children: [
          {
            path: "",
            element: <CreateFavorites />,
          },
          {
            path: "my-favorite-List",
            element: <MyFavoriteList />,
          },
        ],
      },
      {
        path: "admin-settings",
        element: <Index />,
        children: [
          {
            path: "",
            element: <Settings />,
          },
        ],
      },
      // user routes
      {
        path: "user-profile",
        element: <UserProfile />,
        children: [
          {
            path: "",
            element: <UserProfileDetails />,
          },
          {
            path: "user-change-password",
            element: <UserChangePassword />,
          },
        ],
      },
      {
        path: "user-create-favorites",
        element: <UserFavorites />,
        children: [
          {
            path: "",
            element: <UserCreateFavorites />,
          },
          {
            path: "user-my-favorite-List",
            element: <UserMyFavoriteList />,
          },
        ],
      },
      {
        path: "user-my-masjid",
        element: <MyMasjid />,
        children: [
          {
            path: "",
            element: <MyMasjidDetails />,
          },
          {
            path: "my-masjid-list",
            element: <MyMasjidList />,
          },
        ],
      },
      {
        path: "user-notifications",
        element: <UserNotificationIndex />,
        children: [
          {
            path: "",
            element: <UserSettings />,
          },
        ],
      },
      {
        path: "user-settings",
        element: <UserIndex />,
        children: [
          {
            path: "",
            element: <UserSettings />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <RedirectHome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
 
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/powerhouse/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/powerhouse/reset-password/:email",
    element: <ResetPassword />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routes;
