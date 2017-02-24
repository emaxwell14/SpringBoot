package com.emaxwell.domain;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * Created by User on 15/02/2017.
 */
@Repository
public class NoteDAOImpl implements INoteDAO {


      @PersistenceContext
      private EntityManager manager;

    //  Tried this and worked but enties not mapped?...
   // @Autowired
  //  private EntityManagerFactory entityManagerFactory;

    public List<Note> getAll() {
    //    EntityManager manager = entityManagerFactory.createEntityManager();
        return manager.createQuery("SELECT p FROM notes p", Note.class).getResultList();
    }

    public Note getNoteById(int id) {
   //     EntityManager manager = entityManagerFactory.createEntityManager();
        return manager.find(Note.class, id);
    }

    public Note save(Note note) {
    //    EntityManager manager = entityManagerFactory.createEntityManager();
        return manager.merge(note);
    }
}
