import PreviewLink from "./preview-link"

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto px-5">
        <div className="py-10 flex justify-center items-center">
          <a
            href="https://www.instagram.com/afoundlibrary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold hover:underline"
          >
            Project updates and events
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer