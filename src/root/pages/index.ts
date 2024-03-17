export {default as Home} from './Home'



// In this case, the index.ts file serves as a barrel file or an index file that re-exports the Home component from the Home.tsx or Home.ts file located in the same directory. This technique can help simplify imports and provide a central location for exporting multiple components from a directory.

// Using this approach, you don't need to specify the component file name (Home.tsx or Home.ts) in the import statement. Instead, you can directly import it from the directory, and the index.ts file will handle the redirection to the correct file.