import type React from "react";
import { MaiLink } from "@shiraya-ma/mai-ui";

export type Compound<P, C> = React.FC<P> & C;

export type LinkListProps = {
  children: React.ReactNode;
}

export type LinkListItemProps = {
  href: string;
  label: React.ReactNode;
  'data-name'?: string;

  details?: {
    [label: string]: string;
  }
};

export type LinkListChildren = {
  Item: (props: LinkListItemProps) => React.ReactNode;
}

export const LinkList: Compound<LinkListProps, LinkListChildren> = ({ children }: LinkListProps) => {
  return (
    <ul className="flex flex-col p-4 gap-8">
      {children}
    </ul>
  );
};
LinkList.displayName = "LinkList";

export const LinkListItem = ({href, label, details, ...props}: LinkListItemProps) => {
  return (
    <li>
      <div>
        <MaiLink href={href} className='inline-block' isExternal data-name={props['data-name']}>{label}</MaiLink>

        {details && (
          <ul className="flex flex-col gap-2 p-4 list-disc">
            {Object.entries(details).map(([label, href], index) => (
              <li key={index}>
                <MaiLink href={href} isExternal>{label}</MaiLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};
LinkListItem.displayName = "LinkListItem";
LinkList.Item = LinkListItem;