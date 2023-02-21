import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, socials, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
         
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Abdelwaheb BOUDEN",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com/abdelwaheb.bouden.14",
    },

    {
      color: "purple",
      name: "instagram",
      path: "https://www.instagram.com/abdelwaheb.bouden/?hl=fr",
    },

    {
      color: "red",
      name: "youtube",
      path: "https://www.youtube.com/@abdelwahebbouden2266",
    },
  ],
  menus: [
    {
      name: "useful links",
    },
    {
      name: "other resources",
      items: [
        {
          name: "Contact Us",
          path: "",
        },
      ],
    },
  ],
  copyright: (
    <>Copyright © {2023} Adelwaheb BOUDEN ***** Développeur Jihed Abidi .</>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
 
  socials: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
