import { Affix, Transition, ActionIcon, rem } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUp } from "@tabler/icons-react";

export default function ScrollUpAction() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            variant="outline"
            color="pink"
          >
            <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
}
