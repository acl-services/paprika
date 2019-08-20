import React from "react";

import L10n from "@paprika/l10n";
import Toast from "../src";

export default function FixedToast() {
  return (
    <L10n locale="en">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium volutpat libero, at fringilla augue
        ullamcorper vel. Curabitur at aliquam lectus. Ut venenatis vehicula justo, quis vulputate nunc ultrices sed.
        Cras scelerisque elit et leo pulvinar ultrices. Nullam porttitor, leo volutpat luctus consectetur, leo turpis
        tincidunt leo, a hendrerit augue elit vel ex. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Morbi imperdiet felis tellus, nec ultricies mauris venenatis eu. Curabitur in
        nisi odio. Pellentesque vitae pretium mi, ut porta purus. Suspendisse posuere magna eget diam fringilla, nec
        sodales elit suscipit.
      </p>
      <p>
        Mauris malesuada a magna et rhoncus. Nullam quis ipsum mi. Duis vitae suscipit erat, a mattis neque. Fusce
        eleifend ligula ut orci faucibus, elementum auctor nisi tristique. Pellentesque magna lacus, maximus ut ultrices
        nec, blandit eget neque. Donec scelerisque vestibulum elit, in dictum felis accumsan eget. Praesent non est ut
        nibh vehicula feugiat rutrum id augue. Mauris convallis posuere maximus. Phasellus sit amet urna bibendum arcu
        rhoncus imperdiet non congue magna. Nullam egestas mauris quis nisi placerat, ut tempus nisi scelerisque. Proin
        sodales lacus arcu, in maximus felis mollis sed. Cras blandit et tellus ut finibus. Duis ut hendrerit ipsum.
        Quisque egestas semper fermentum. Nam quis sapien id nibh ultricies mollis.
      </p>
      <p>
        Proin et justo in orci sollicitudin ultricies id a mauris. Morbi aliquet vel ante ut laoreet. Nullam sed neque
        sit amet turpis dapibus ultrices. Quisque elit nisi, tempus quis quam sit amet, euismod faucibus augue. Morbi
        scelerisque pharetra velit, eget egestas eros. Donec at nisl eu eros faucibus consequat in sed lorem. Vivamus
        ultricies ligula non dolor fermentum tincidunt.
      </p>
      <Toast isFixed hasCloseButton>
        Sticky toast component
      </Toast>
    </L10n>
  );
}
