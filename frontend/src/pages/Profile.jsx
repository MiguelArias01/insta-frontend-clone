import Filter from "../components/Profile/Filter"
import Footer from "../components/Profile/Footer"
import Grid from "../components/Profile/Grid"
import TopNav from "../components/Profile/TopNav"
import UserInfo from "../components/Profile/UserInfo"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import getUserProfile from '../api/profile.js'

export default function Profile() {
  const token = localStorage.getItem('TOKEN')

  const { username } = useParams()
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const workAround = async () => {
      const res = await getUserProfile(username)
      setUserInfo(res)
      console.log(res);
    };
    workAround();
  }, [])

  return (
    <>
      <TopNav></TopNav>
      <UserInfo></UserInfo>
      <Filter></Filter>
      <Grid></Grid>
      <Footer></Footer>
    </>
  )
}