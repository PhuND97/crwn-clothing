import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { useSelector } from "react-redux";
import { getDirectory } from "../../store/reducer/directory";

function Directory() {
	const sections = useSelector(getDirectory);
	console.log(sections);
	return (
		<div className="directory-menu">
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
}

export default Directory;
