
export const Container = (props) => {
  const { component, screen } = props

  const Component = component || 'div'

  return (
      <Component className='px-2 m-auto' {...props}/>
  )
}
