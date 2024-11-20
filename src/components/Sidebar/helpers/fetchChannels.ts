import axios from "axios";
import { TWITCH_URL, userList } from "../constants";
import { ChannelDetail } from "../types";
import mapChannelToDetail from "./mapChannelToDetail";


const fetchChannels = async () => {
  const data: ChannelDetail[] = [];
  
  await Promise.all(userList.map((username) => axios(`${TWITCH_URL}${username}`)))
  .then((res) => {

    res.forEach((response) => {
      data.push(mapChannelToDetail(response.data));
    });
  })
  .catch((err) => console.log(`error: ${err}`));

  return data;

};

export default fetchChannels;