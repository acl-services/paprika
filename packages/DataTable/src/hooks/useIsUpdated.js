import usePrevious from "@paprika/helpers/lib/hooks/usePrevious";

export default function useIsUpdated(prop) {
  const prevProp = usePrevious(prop);

  return prevProp !== undefined && prop !== prevProp;
}
