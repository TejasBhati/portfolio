import SocialMedias from "./SocialMedias";
const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* socials */}
            <SocialMedias
              containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
              iconsStyles='text-primary dark:text-white/70 text-[20px] hover: text-white dark:hover: text-primary transition-all'
            />
          {/* copyright */}
          <div className='text-muted-foreground'>
            Copyright &copy; Tejas Bhati. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;