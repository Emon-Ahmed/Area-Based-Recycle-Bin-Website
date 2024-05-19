import { doSignIn } from "@/app/actions/index";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  return (
    <form action={doSignIn}>
      <Button variant="outline" className="w-full">
        Sign up with Google
      </Button>
    </form>
  );
};

export default SignIn;
