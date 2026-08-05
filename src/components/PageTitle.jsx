import { useEffect } from "react";
import { useLocation } from "react-router";

const PageTitle = ({ title, description }) => {
    const location = useLocation();

    // Change the document title and meta description whenever the location or props change
    useEffect(() => {
        document.title = title;
        
        if (description) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute("content", description);
            } else {
                metaDesc = document.createElement("meta");
                metaDesc.name = "description";
                metaDesc.content = description;
                document.head.appendChild(metaDesc);
            }
        }
    }, [location, title, description]);

    return null;
};

export default PageTitle;
