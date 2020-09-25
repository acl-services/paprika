import React from "react";
import NotificationCard from "../../src";

const bubblieString = `<title>Bubbly Mascot</title>
<defs>
    <path id="a" d="m117.2 137.01c-12.021 8.1954-26.549 12.987-42.195 12.987-15.221 0-29.382-4.534-41.208-12.325 12.496-4.2393 27.102-6.6749 42.708-6.6749 14.776 0 28.655 2.1832 40.695 6.0134z"></path>
</defs>
<g fill="none" fill-rule="evenodd">
    <g transform="translate(-359 -86)">
        <g transform="translate(359 86)">
            <circle cx="75" cy="75" r="75" fill="#F2F2F2" fill-rule="evenodd"></circle>
            <mask fill="white">
                <use xlink:href="#a"></use>
            </mask>
            <use fill="#E9E9E9" fill-rule="evenodd" xlink:href="#a"></use>
            <g transform="translate(27 34)">
                <path d="m97 40.559c0-22.4-21.714-40.559-48.5-40.559s-48.5 18.159-48.5 40.559 21.714 40.559 48.5 40.559c8.0399 0 15.623-1.636 22.299-4.5316 2.2574 1.8182 6.2727 3.8692 13.415 5.4133-2.8609-5.0481-3.4736-8.7474-3.1376-11.392 9.7813-7.4204 15.924-18.135 15.924-30.049zm-10.176 39.962c1.2776 2.2543-0.71124 4.959-3.2439 4.4114-5.7818-1.25-10.108-2.9213-13.178-4.9325-6.7887 2.6986-14.228 4.1185-21.902 4.1185-28.336 0-51.5-19.372-51.5-43.559s23.164-43.559 51.5-43.559 51.5 19.372 51.5 43.559c0 12.143-5.8904 23.444-16.008 31.577 0.038706 2.1972 0.89607 4.9701 2.8311 8.3846z" fill="#2666AB" fill-rule="nonzero"></path>
                <path d="m81.076 70.608c9.7813-7.4204 15.924-18.135 15.924-30.049 0-22.4-21.714-40.559-48.5-40.559s-48.5 18.159-48.5 40.559 21.714 40.559 48.5 40.559c8.0399 0 15.623-1.636 22.299-4.5316 2.2574 1.8182 6.2727 3.8692 13.415 5.4133-2.8609-5.0481-3.4736-8.7474-3.1376-11.392z" fill="#6DA9E9" fill-rule="evenodd"></path>
                <path d="m27.5 29c2.4853 0 4.5-2.0147 4.5-4.5s-2.0147-4.5-4.5-4.5-4.5 2.0147-4.5 4.5 2.0147 4.5 4.5 4.5z" fill="#2666AB" fill-rule="evenodd"></path>
                <circle cx="54.5" cy="24.5" r="4.5" fill="#2666AB" fill-rule="evenodd"></circle>
                <path transform="translate(69.5 78) rotate(1) translate(-69.5 -78)" d="m64.975 81.923c0.099995-0.033332 0.2795-0.095075 0.5273-0.18332 0.40863-0.14552 0.86288-0.31364 1.3516-0.50251 1.398-0.54027 2.7969-1.1404 4.1097-1.7873 1.8557-0.91441 3.3903-1.8485 4.5132-2.811 0.62899-0.53913 0.70183-1.4861 0.1627-2.1151-0.53913-0.62899-1.4861-0.70183-2.1151-0.1627-0.89807 0.76977-2.2368 1.5847-3.8868 2.3977-1.2246 0.60343-2.5444 1.1696-3.8652 1.6801-0.46285 0.17888-0.8922 0.33779-1.2765 0.47465-0.22798 0.081185-0.38831 0.13633-0.46957 0.16342-0.78591 0.26197-1.2107 1.1114-0.94868 1.8974s1.1114 1.2106 1.8974 0.94868z" fill="#2666AB" fill-rule="nonzero"></path>
            </g>
            <g transform="translate(54 72)">
                <path d="m27.99 1.3717c0.044068-0.4513 4e-7 -1.3717-1.3392-1.3717h-25.298c-1.3417 0-1.3881 0.94482-1.3417 1.4078 0.70896 7.0709 6.7009 12.592 13.988 12.592 7.2993 0 13.299-5.5401 13.991-12.628zm-13.991 15.628c-8.78 0-16.105-6.6411-16.973-15.293-0.23936-2.3873 1.1293-4.7071 4.3267-4.7071h25.298c3.1749 0 4.5567 2.2897 4.325 4.6632-0.84674 8.6715-8.1807 15.337-16.977 15.337z" fill="#2666AB" fill-rule="nonzero"></path>
                <path d="m27.99 1.3717c-0.69214 7.0882-6.6921 12.628-13.991 12.628-7.2869 0-13.279-5.5213-13.988-12.592-0.046422-0.463 0-1.4078 1.3417-1.4078 1.3417-3.5598e-17 16.872-4.2146e-15 25.298 3.5598e-17 1.3392 5.4375e-16 1.3832 0.92039 1.3392 1.3717z" fill="#fff" fill-rule="evenodd"></path>
            </g>
        </g>
    </g>
</g>`;

export default function Example({ align, level, maxWidth, ...moreProps }) {
  return (
    <NotificationCard maxWidth={maxWidth} {...moreProps}>
      <NotificationCard.Image align={align}>
        <svg
          style={{ width: "100%" }}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: bubblieString }}
          version="1.1"
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
        />
      </NotificationCard.Image>
      <NotificationCard.Header level={level}>Bubbly Hat</NotificationCard.Header>
      <NotificationCard.Body>
        Bubbly Content – Lo-fi iPhone fixie shoreditch, authentic seitan you probably haven&apos;t heard of them. Venmo
        vaporware cornhole unicorn.
      </NotificationCard.Body>
      <NotificationCard.Footer>Bubbly Shoes</NotificationCard.Footer>
    </NotificationCard>
  );
}
