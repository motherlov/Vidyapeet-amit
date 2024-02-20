import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../Helper/Helper";
import { toast } from "react-toastify";

export const getCategories = createAsyncThunk("/showallcategory", async () => {
  const res = await axiosInstance.get(`/showallcategory`);
  const resData = res?.data;
  return resData;
});

export const getCourses = createAsyncThunk("/course", async () => {
  const res = await axiosInstance.get(`/course`);
  const resData = res?.data.Courses;
  return resData;
});

export const applyCourse = createAsyncThunk(
  "/course/apply/:id",
  async ({ postData, courseId }) => {
    const res = await axiosInstance.post(`/course/apply/${courseId}`, postData);
    return res.data;
  }
);

export const getTeam = createAsyncThunk("/team", async () => {
  const res = await axiosInstance.get(`/team`);
  const resData = res?.data.TeamMember;
  return resData;
});

export const getTestimonials = createAsyncThunk("/testimonial", async () => {
  const res = await axiosInstance.get(`/testimonial`);
  const resData = res?.data.testimonials;
  return resData;
});

const initialState = {
  status: "",
  courses: [],
  teamMembers: [],
  testimonials: [],
  allCategories: [],
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      //* courses
      .addCase(getCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCourses.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.courses = payload;
      })
      .addCase(getCourses.rejected, (state, { payload }) => {
        state.status = "failed";

        state.error = payload?.message;
        toast.error(payload?.message);
      })

      //applyCourse

      .addCase(applyCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(applyCourse.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(applyCourse.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload?.message;
        toast.error(payload?.message);
      })

      //* Categories
      .addCase(getCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.allCategories = payload.data;
      })
      .addCase(getCategories.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload?.message;
        toast.error(payload?.message);
      })

      //Team

      .addCase(getTeam.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTeam.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.teamMembers = payload;
      })
      .addCase(getTeam.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload?.message;
        toast.error(payload?.message);
      })
      //Testimonials

      .addCase(getTestimonials.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTestimonials.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.testimonials = payload;
      })
      .addCase(getTestimonials.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload?.message;
        toast.error(payload?.message);
      });
  },
});

export default courseSlice.reducer;
