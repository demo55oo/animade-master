import React from "react";
import {
  AskGPT,
  ChangePassword,
  ChoosePlatform,
  ChooseProdutcs,
  Drops,
  Financial,
  Home,
  ImageInput,
  ManageAccount,
  NTF,
  Payment,
  PaymentInformation,
  Pricing,
  Privacy,
  Profile,
  ResetPassword,
  Settings,
  SignIn,
  SignUp,
  SingleComplete,
  SingleDrop,
  SingleInput,
  VerifyNumber,
  Howitworks,
  Plan1sucess,
  Plan2sucess,
  Plan3sucess,
  Plan4sucess
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { MainLayout, FluidLayout, UserLayout } from "./layouts";
import { AuthGuard, LoginGuard } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route path="/" element={<FluidLayout />}>
        <Route
          path="login"
          element={
            <LoginGuard>
              <SignIn />
            </LoginGuard>
          }
        />
        <Route
          path="register"
          element={
            <LoginGuard>
              <SignUp />
            </LoginGuard>
          }
        />
        <Route
          path="reset__password"
          element={
            <LoginGuard>
              <ResetPassword />
            </LoginGuard>
          }
        />
        <Route
          path="vertify-number"
          element={
            <LoginGuard>
              <VerifyNumber />
            </LoginGuard>
          }
        />
        
      </Route>
      <Route path="" element={<UserLayout />}>
        <Route
          path="single-input"
          element={
            <AuthGuard>
              <SingleInput />
            </AuthGuard>
          }
        />
        <Route path="ask-ai" element={<AskGPT />} />
        <Route
          path="image-input"
          element={
            <AuthGuard>
              <ImageInput />
            </AuthGuard>
          }
        />
      </Route>
      <Route path="" element={<UserLayout noHeader={true} />}>
        <Route
          path="choose-platform"
          element={
            <AuthGuard>
              <ChoosePlatform />
            </AuthGuard>
          }
        />
        <Route
          path="choose-products"
          element={
            <AuthGuard>
              <ChooseProdutcs />
            </AuthGuard>
          }
        />
        <Route
          path="profile"
          element={
            <AuthGuard>
              <Profile />
            </AuthGuard>
          }
        />
        <Route
          path="settings"
          element={
            <AuthGuard>
              <Settings />
            </AuthGuard>
          }
        />
        <Route
          path="settings/payment"
          element={
            <AuthGuard>
              <Payment />
            </AuthGuard>
          }
        />
           <Route
          path="settings/privacy"
          element={
              <Privacy />
          }
        />
        <Route
          path="settings/payment/information"
          element={
            <AuthGuard>
              <PaymentInformation />
            </AuthGuard>
          }
        />
        <Route
          path="settings/manage-account"
          element={
            <AuthGuard>
              <ManageAccount />
            </AuthGuard>
          }
        />
        <Route
          path="settings/change-password"
          element={
            <AuthGuard>
              <ChangePassword />
            </AuthGuard>
          }
        />
        <Route
          path="drops"
          element={
            <AuthGuard>
              <Drops />
            </AuthGuard>
          }
        />
        <Route
          path="drops/:id"
          element={
            <AuthGuard>
              <SingleDrop />
            </AuthGuard>
          }
        />
        <Route
          path="drops/complete/:id"
          element={
            <AuthGuard>
              <SingleComplete />
            </AuthGuard>
          }
        />
        <Route
          path="financial"
          element={
            <AuthGuard>
              <Financial />
            </AuthGuard>
          }
        />
        <Route
          path="ntf"
          element={
            <AuthGuard>
              <NTF />
            </AuthGuard>
          }
        />
      </Route>
      <Route
        path="/pricing"
        element={
          // <AuthGuard>
          <Pricing />
          // </AuthGuard>
        }
      />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/plan1sucess" element={<Plan1sucess />} />
      <Route path="/plan2sucess" element={<Plan2sucess />} />
      <Route path="/plan3sucess" element={<Plan3sucess />} />
      <Route path="/plan4sucess" element={<Plan4sucess />} />

      <Route path="/How-it-works" element={

         <Howitworks />

      } />

      <Route path="*" element={<h1>Not Found Page...!</h1>} />
    </Routes>
  );
};

export default App;
