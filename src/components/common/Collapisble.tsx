import React from "react";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface CollapsibleProps {
  id: string;
  summary: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const Collapsible: React.FC<CollapsibleProps> = ({
  id,
  summary,
  children,
  defaultExpanded = false,
}) => {
  return (
    <Accordion defaultExpanded={defaultExpanded}>
      <AccordionSummary id={id} aria-label={id} expandIcon={<ExpandMoreIcon />}>
        {summary}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default Collapsible;
