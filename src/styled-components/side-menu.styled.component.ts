import styled from 'styled-components';

export const MenuLayout = styled.div`
  height: calc(100vh - 5.25rem);
  width: 200px;
  padding: 1.5rem 0.75rem 0 0.75rem;
  background-color: white;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

export const MenuLogo = styled.img`
  width: 22px;
  height: auto;
  padding: 5px 0 10px 8px;
`;

export const MenuBlock = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
`;

export const UnorderedMenuList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const MenuListItem = styled.li`
  list-style: none;
  padding: 5px 0 10px 8px;
  cursor: pointer;
  margin-bottom: 0;
  color: #343a40;

  .active-route {
    color: #3f51b5;
    border-radius: 4px;
  }

  a {
    color: inherit;
  }
`;

export const MenuLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dfe3e6;
  margin: 14px 0;
`;

export const ContactSupportBlock = styled(MenuBlock)`
  padding: 8px;
  display: flex;
  align-items: center;
  margin-top: auto;
  a {
    color: inherit;
    text-decoration: none;
    font-size: 0.875rem;
  }
  .icon {
    font-size: 1rem;
    padding-right: 8px;
  }
  &:hover {
    color: #3f51b5;
  }
`;
