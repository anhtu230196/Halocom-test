import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { sortPostsAction, sortPostsByTimeAction } from '../../redux/actions/postsAction'
import "./Filter.css"

function Filter() {
    // const [sortByPop, setSortByPop] = useState('default')
    // const [sortByTime, setSortByTime] = useState('all')
    const dispatch = useDispatch()

    const handleChange = (e, data) => {
        console.log(data.value);
        // setSortByPop(data.value)
        dispatch(sortPostsAction(data.value))
    }
    return (
        <div className="filter">
            <Form>
                <Form.Group widths='equal'>
                    <Form.Select
                        fluid
                        label='Search'
                        placeholder='Stories'
                    />
                    <Form.Select
                        fluid
                        label='by'
                        placeholder='Popularity'
                        onChange={handleChange}
                        options={[
                            { key: 'd', text: 'default', value: 'default' },
                            { key: 'm', text: 'Most Popular', value: 'most' },
                            { key: 'l', text: 'Least Popular', value: 'least' }
                        ]}
                    />
                    <Form.Select
                        fluid
                        label='for'
                        placeholder='All time'
                        onChange={handleChange}
                        options={[
                            { key: 'all', text: 'All time', value: 'all' },
                            { key: 'n', text: 'Newest', value: 'newest' },
                            { key: 'la', text: 'Latest', value: 'latest' },
                        ]}
                    />
                </Form.Group>
            </Form>
        </div>

    )
}

export default Filter
