import { Badge, Button, Textarea } from "@mantine/core";
import ChecksumCalculator from "../components/ChecksumCalculator";
import JsonValidationBadge from "../components/JsonValidationBadge";
import { useJSONState } from "../hooks";
import { providers } from "../providers";

function Home(): JSX.Element {
  const [value, text, setValue] = useJSONState('');

  const format = () => {
    setValue(JSON.stringify(value, undefined, 4));
  };

  return <div className="flex w-full h-full justify-center pt-10">
    <div className="w-3/5 h-full">
      <Textarea
        value={text}
        onChange={(event => setValue(event.currentTarget.value))}
        placeholder="Request Body"
        size="xl"
        minRows={20}
        className="min-w-full min-h-full" />
      <div className="pt-8 flex justify-start gap-5 pb-8">
        <div className="flex flex-col gap-5">
          <Button disabled={!value} onClick={format}>Format</Button>
          <JsonValidationBadge isValid={!!value} />
        </div>
        <div className="flex flex-wrap gap-5">
          {providers.map(provider =>
            <ChecksumCalculator className="w-[26rem]" key={provider.name} provider={provider} input={text} />
          )}
        </div>
      </div>
    </div>
  </div>;
}

export default Home
