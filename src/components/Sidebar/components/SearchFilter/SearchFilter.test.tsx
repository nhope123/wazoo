import { render, screen, fireEvent } from '../../../../test/vitest-setup';
import SearchFilter from './SearchFilter';
import { SearchFilterProps } from './types';
import { describe, expect, it, vi } from 'vitest';

describe('SearchFilter Component', () => {
  const mockSetFilter = vi.fn();
  const mockSetSearch = vi.fn();

  const defaultProps: SearchFilterProps = {
    filter: 'All',
    setFilter: mockSetFilter,
    search: '',
    setSearch: mockSetSearch,
    channelCount: 5,
  };

  it('should render the SearchFilter component', () => {
    render(<SearchFilter {...defaultProps} />);
    expect(screen.getByPlaceholderText('Search users')).toBeInTheDocument();
  });

  it('should call setSearch when search input changes', () => {
    render(<SearchFilter {...defaultProps} />);
    const searchInput = screen.getByPlaceholderText('Search users');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(mockSetSearch).toHaveBeenCalledWith('test');
  });

  it('should call setFilter when a filter button is clicked', () => {
    render(<SearchFilter {...defaultProps} />);
    const onlineButton = screen.getByText('Online');
    fireEvent.click(onlineButton);
    expect(mockSetFilter).toHaveBeenCalledWith('Online');
  });

  it('should display the correct filter button as contained', () => {
    render(
      <SearchFilter
        {...defaultProps}
        filter="Online"
      />,
    );
    const onlineButton = screen.getByText('Online').parentElement;
    expect(onlineButton).toHaveClass('MuiButton-contained');
  });

  it('should display the correct badge content', () => {
    render(
      <SearchFilter
        {...defaultProps}
        filter="All"
      />,
    );
    const allButton = screen.getByText('All');
    expect(allButton).toHaveTextContent('5');
  });

  it('should not display badge content for non-selected filters', () => {
    render(
      <SearchFilter
        {...defaultProps}
        filter="Online"
      />,
    );
    const offlineButton = screen.getByText('Offline');
    expect(offlineButton).not.toHaveTextContent('5');
  });
});
