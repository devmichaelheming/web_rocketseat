import React, { FC, ReactElement, useState } from "react";
import { ChatTeardropDots } from "phosphor-react";
import { Popover } from '@headlessui/react'

const Widget: FC = (): ReactElement => {
  return (
    <Popover className="absolute bottom-5 right-5">
      <Popover.Panel>Hello Word</Popover.Panel>

      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center gap-1 group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
            Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};

export default Widget;
