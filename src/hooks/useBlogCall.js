import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getBloDetLikSuccess } from "../features/blogSlice";
import { toastErrorNotify } from "../helper/ToastNotify";
import axios from "axios";

const useBlogCall = () => {
const dispatch = useDispatch()


    const getBlog = async (url) => {
        dispatch(fetchStart());
        try {
          const { data } = await axios(`${import.meta.env.VITE_BASE_URL}`+"api/blogs/");
          dispatch(getBloDetLikSuccess({ url, data }));
        } catch (error) {
          dispatch(fetchFail());
          toastErrorNotify("Data can not be Fetched !");
          console.log(error);
        }
      };



  return {getBlog}
}

export default useBlogCall