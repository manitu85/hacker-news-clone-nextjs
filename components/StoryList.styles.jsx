import styled from 'styled-components'

export const Story = styled.div`
  padding: .4em 0;
  margin-top: 1rem;
`

export const StoryList = styled.div`
  padding: 0 1em;
`

export const StoryListTitle = styled.div`
  font-size: 1.8rem;
  letter-spacing: 1px;
  font-weight: 300;
  color: #9f9f9f;
  margin-bottom: -1rem;
  
`

export const StoryUser = styled.div`
  padding-bottom: .5em ;
  margin-bottom: -12px;

  display: flex;
  align-items: center;

  span {
    margin-right: .65em;
    margin-left: .3em;
    color: #9f9f9f;
    font-size: .65rem;
    letter-spacing: .5px;
  }
`

export const StoryTitle = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
  /* margin-bottom: .4em; */

  a {
    color: ${({ theme }) => theme.text };
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const StoryDetails = styled.div`
  font-size: .8rem;
  font-weight: bold;

  display: flex;
  align-items: center;

  span {
    margin-right: 1.25em;
    margin-left: .3em;
  }

  a {
    color: #ff6600;;
    text-decoration: none;
    margin-left: .3em;

     &:hover {
      text-decoration: underline;
    }
  }
`

