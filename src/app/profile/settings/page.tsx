import UserSettings from "@/components/UserSettings";
import getUserServerSide from "@/services/server/UserService";

async function ProfileSettings() {
  const user = await getUserServerSide();

  // if user === undefined and tries to access a /profile page
  // he will be redirected to the login page. (code in app/profile/layout.tsx)
  // that's why we don't have specific redirect code in this component

  if (user !== undefined) {
    return <UserSettings fullName={user.fullName} email={user.email} />;
  }
}

export default ProfileSettings;
