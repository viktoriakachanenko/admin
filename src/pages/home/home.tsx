import { Avatar } from "src/ui/avatar";
import { Button } from "src/ui/button";
import { IconUser } from "src/ui/icons/icon-user";
import { Spinner } from "src/ui/spinner";

export const Home = () => {
  return (
    <>
      <Avatar
        src="https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg"
        alt="avatar"
      />
      <Avatar
        src="https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg"
        alt="avatar"
        size="large"
      />
      <Button
        size="small"
        startIcon={<IconUser />}
        onClick={() => {}}
        loading={true}
      >
        Save
      </Button>
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
      <Spinner size="large" theme="secondary" />
    </>
  );
};
