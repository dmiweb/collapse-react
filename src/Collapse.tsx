import { Transition } from 'react-transition-group';
import { useState, useRef } from 'react';

type CollapseProps = {
  collapsedLabel: string,
  expandedLabel: string,
  children: string
}

const Collapse = ({ collapsedLabel = "Развернуть", expandedLabel = "Свернуть", children }: CollapseProps) => {
  const [isOpen, setOpen] = useState(false);
  const nodeRef = useRef(null);

  const onOpen = () => setOpen(!isOpen);

  return (
    <div className="collapse">
      <button className="collapse-btn" onClick={onOpen}>
        {!isOpen ? collapsedLabel : expandedLabel}
      </button>

      <Transition nodeRef={nodeRef} in={isOpen} timeout={300}>
        {(state) => <div className={`spoiler spoiler--${state}`} ref={nodeRef}>{children}</div>}
      </Transition>
    </div>
  );
}

export default Collapse;